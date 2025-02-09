
import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ImageViewerProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageViewer = ({ src, alt, className }: ImageViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
        onClick={() => setIsOpen(true)}
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageViewer;
