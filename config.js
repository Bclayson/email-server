module.exports = {
    corsOptions: {
      origin: 'http://localhost:3000'
    },
    port: process.env.PORT || 8080,
    smtpConfig: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'bclayson@verisagellc.com',
            pass: 'Borris2099'
        }
    }
}

