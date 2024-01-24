"use client";
import React from "react";
import { useState } from "react";
import QRCode from "qrcode";
import JSZip from "jszip";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Bulk Qr Code Generator",
  description:
    "Generate multiple QR codes at once with our bulk QR code generator. Our tool is fast, easy to use, and can generate thousands of QR codes in multiple formats. Whether you need to generate QR codes for inventory management, asset tracking, or any other purpose, our bulk QR code generator has you covered. Try it today and see how easy it is to generate QR codes in bulk!",
};

const page = () => {
  const [inputText, setInputText] = useState("");
  const [qrCodes, setQrCodes] = useState([]);
  const [zipFile, setZipFile] = useState(null);

  const generateQrCodes = async () => {
    const lines = inputText.split("\n");
    const generatedCodes = [];

    for (const line of lines) {
      const codeDataUrl = await QRCode.toDataURL(line, {
        errorCorrectionLevel: "H",
        width: 300,
        height: 300,
      });
      generatedCodes.push({ dataUrl: codeDataUrl, name: line });
    }

    setQrCodes(generatedCodes);
  };

  const downloadSingleQrCode = (name, dataUrl) => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `${name}.png`;
    a.click();
  };

  const downloadAllQrCodes = () => {
    const zip = new JSZip();

    qrCodes.forEach(({ name, dataUrl }) => {
      const blobData = dataUrl.split(",")[1];
      zip.file(`${name}.png`, blobData, { base64: true });
    });

    zip.generateAsync({ type: "blob" }).then((blob) => {
      setZipFile(blob);
    });
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4 items-center justify-center py-10 md:py-20">
        <h1 className="text-center">Bulk Qr Code Generator</h1>
        <p className="text-center">Enter each QR code data on a new line:</p>
        <Textarea
          value={inputText}
          onChange={handleInputChange}
          className="md:w-[60%] w-[90%]"
          placeholder="Type your QR Code data, one code per line"
        />
        <Button onClick={generateQrCodes}>Generate Qr Code(s)</Button>
        <div>
          <ScrollArea className="md:h-[60vh] h-[40vh] w-[80vw] rounded-md border p-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {qrCodes.map(({ dataUrl, name }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <img src={dataUrl} alt={`QR Code for ${name}`} />
                  {name}
                  <Button
                    className="mt-2"
                    variant="outline"
                    onClick={() => downloadSingleQrCode(name, dataUrl)}
                  >
                    Download
                  </Button>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div>
          {qrCodes.length > 0 && (
            <div>
              <Button onClick={downloadAllQrCodes}>Download All as Zip</Button>
            </div>
          )}
        </div>
        <div>
          {zipFile && (
            <a href={URL.createObjectURL(zipFile)} download="qr_codes.zip">
              <Button>Download Zip file</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
