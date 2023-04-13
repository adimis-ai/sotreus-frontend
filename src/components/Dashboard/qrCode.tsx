import React from 'react'
import QRCode from 'qrcode.react';

interface QrCodeProps {
    privateKey: string;
  }

export const QrCode: React.FC<QrCodeProps> = ({ privateKey }) => {
    return (
    <div>
        <label htmlFor="my-modal-3">Qr Code</label>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box relative w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-3xl text-blue-200 font-bold">Scan the following Qr Code!</h3>
            <p className="py-4 text-sm text-white font-medium">You will get the private key here..</p>
            <div className='mt-5 flex justify-center'>
              <QRCode
                  value={privateKey}
                  size={128}
                  level="H"
                  renderAs="canvas"
                  includeMargin={true}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default QrCode
