import pkg from "whatsapp-web.js"
const { Client, MessageMedia } = pkg

const client = new Client()

client.on("ready", async () => {
    const media = MessageMedia.fromFilePath(
        "/home/prince07/Documents/real_work/QR-code/whatsapp.png"
    );

    await client.sendMessage(
        "2349161083039",
        media,
        {
            caption: "How far na"
        }
    )
    
    console.log("Image sent")
})

client.initialize();