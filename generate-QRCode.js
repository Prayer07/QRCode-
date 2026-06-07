import QRCode from 'qrcode'

// const url = 'http://192.168.100.206:3000/'
const url = 'https://wa.me/2349161083039?text=U%20are%20gay'

QRCode.toFile('./whatsapp.png', url, (err) => {
  if (err) throw err
  console.log('QR code generated successfully!')
})