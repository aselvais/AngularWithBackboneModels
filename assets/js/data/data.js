/**
 * Data comming from a rest API for eg.
 * @type {*[]}
 */
var restData = [
    {
        subject: "This is a subject",
        selected: false,
        value: 1,
        from: "arnaud@antidot.ca",
        to: "test@test.com",
        body: "This is the body of the message",
        hasattachments: false
    },
    {
        subject: "This is another mail",
        selected: false,
        value: 1,
        from: "arnaud@antidot.ca",
        to: "test@test.com",
        body: "Another body message",
        hasattachments: false
    },
    {
        subject: "Hello message",
        selected: false,
        value: 1,
        from: "arnaud@antidot.ca",
        to: "test@test.com",
        body: "I don't know what to write in here.",
        hasattachments: false
    },
    {
        subject: "Welcome to webmail stuff",
        selected: false,
        value: 1,
        from: "arnaud@antidot.ca",
        to: "test@test.com",
        body: "Yeah I said you are welcome!",
        hasattachments: false
    },
    {
        subject: "Important message",
        selected: false,
        value: 1,
        from: "arnaud@antidot.ca",
        to: "test@test.com",
        body: "Hello, this message is so important... I can't even tell you how important it is.",
        hasattachments: false
    },
    {
        subject: "Angular is pretty cool",
        selected: false,
        value: 1,
        from: "arnaud@antidot.ca",
        to: "test@test.com",
        body: "Well, at least with real usable client models ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra gravida auctor. Donec blandit finibus fringilla. Donec sit amet tempus dui, sed fringilla eros. Nunc vestibulum lectus sed interdum gravida. In facilisis nisl felis. Aenean at lacus placerat, vehicula turpis sit amet, maximus quam. Sed iaculis condimentum nisi a efficitur. Phasellus vitae tellus in augue accumsan eleifend. Maecenas iaculis sapien eros, eget tempus felis porttitor non.",
        hasattachments: true
    },
    {
        subject: "Long message",
        selected: false,
        value: 1,
        from: "arnaud@antidot.ca",
        to: "test@test.com",
        body: "Ut vel aliquam nibh, eu tincidunt neque. Vivamus tincidunt ipsum ut magna laoreet, sit amet accumsan mauris congue. Pellentesque quam ligula, interdum non posuere nec, faucibus nec lectus. Praesent placerat tortor arcu, in pellentesque nibh efficitur fermentum. Morbi in blandit tortor, interdum ullamcorper arcu. Duis justo nisl, vehicula a maximus vel, sollicitudin sed mi. Vivamus libero metus, congue a pellentesque sit amet, malesuada in nibh. Vivamus porta sodales condimentum. Nulla mi dui, tristique sit amet metus nec, egestas blandit purus. Nulla ornare dui sem, vitae fringilla lectus facilisis ut. Donec placerat euismod nibh, sit amet facilisis ante scelerisque at. Praesent nec nibh nec justo vestibulum porta quis nec tortor. Fusce in nibh varius, aliquet nulla ac, ultricies eros. Proin rhoncus ex auctor turpis fermentum, sit amet malesuada massa egestas. Maecenas eget purus non libero consequat lobortis. In vel ipsum non magna aliquam tincidunt ut eu ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hasattachments: false
    }
];

/**
 * Data for file attachment
 * @type {*[]}
 */
var attachData = [
    {
        filename: "DBdocumentor-CLI.PNG",
        filelocation: "./assets/images/DBdocumentor-CLI.PNG",
        thumbnaillocation: "./assets/images/DBdocumentor-CLI-thumb.PNG",
        filetype: 'PNG'
    },
    {
        filename: "Zoolander2b.jpg",
        filelocation: "./assets/images/Zoolander2b.jpg",
        thumbnaillocation: "./assets/images/Zoolander2b-thumb.jpg",
        filetype: 'JPG'
    }
];