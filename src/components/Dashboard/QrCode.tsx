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
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className=''>
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
