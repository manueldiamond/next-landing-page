export const mainLogoUrl="/next.svg"
export const header={
    navLinks:[
        "Features",
        "Products",
        "Reviews"
    ],
    buttonText:"Get in Touch",
}
export const hero={
    headerParagraph:"Breath taking learning resources that carve you path to success",
    header:"Start making 499 USD, per hour. Join the Sigma Grindset Cats and EARN for only 499 USD",
    heroImage:img("https://i.ibb.co/yswxGJ6/Whats-App-Image-2024-05-13-at-3-42-30-PM.jpg","working sigma cat"),
    imageCaption:"Its actually just an AI cat",
    CTA:{
        heading:"Get the deal 499 USD!",
        subText:"& 2 extra cat feed for FREE"
    },
    
    endingParagraph:"Our cute meowy support team provides a 30 day 0% MONEY BACK guarantee. Simply Amazing right. But really, with all you'll get why will you want yr money back"
}

export const blueCard={
    heading:"The Sigma Grindset Cats Program",
    image:img("https://i.ibb.co/RBBCd6D/image-removebg-preview-2.png"),
   
        items: [
            {
                heading: "Unluck yr inner Meow",
                text: "Discover the hidden potential within you and unleash the power of your inner meow."
            },
            {
                heading: "Pawsitivity Training",
                text: "Join our training sessions to cultivate a pawsitive mindset and approach life with optimism and enthusiasm."
            },
            {
                heading: "Whisker Wellness Workshops",
                text: "Participate in our workshops focused on whisker wellness, where you can learn self-care techniques for your whiskers and overall well-being."
            },
            {
                heading: "Meowditation Retreats",
                text: "Embark on a journey of self-discovery and relaxation with our meowditation retreats designed to help you find inner peace and balance."
            },
            {
                heading: "Feline Fitness Classes",
                text: "Stay active and healthy with our feline fitness classes tailored to keep you in top shape while having fun like a graceful cat."
            }
        ]
};
 


export const bonus2Card={
    heading:"Wow, you get 2 Bonus for free, Sugoyi ne:",
    items:[
        {
            title:"GORD FOR DIG LOGODESIGN",
            desc:"Master the art of DIGGING LOGODESIGN. An essential skill for Every Sigma Cat ",
            image:"/vercel.svg",
            value:999
        },  {
            title:"DROPSHIPPING E-BOK",
            desc:"Master Shipment of animal droping! An even more exotic essential for Every Sigma Cat ",
            image:"/vercel.svg",
            value:9999
        },
    ]
}

export const stepsSection={
    heading:"Hur Det Fungerar",
    subtext:"loremss ipsumss, I am sooo sleepy",
    items:[
        {
            image:"/vercel.svg",
            text:"lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,"
        },
        {
            image:"/vercel.svg",
            text:"lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,"
        },
        {
            image:"/vercel.svg",
            text:"lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,"
        },
    ],
    buttonText:"Bara 499 kr???? Ta daaa!"
} 

export const exempels={
    heading:"Exempels pictures",
    items:[
        img("https://i.ibb.co/fnjqWFL/image.png"),
        img("https://i.ibb.co/fnjqWFL/image.png"),
        img("https://i.ibb.co/fnjqWFL/image.png"),
        img("https://i.ibb.co/fnjqWFL/image.png"),
        img("https://i.ibb.co/fnjqWFL/image.png"),
        img("https://i.ibb.co/fnjqWFL/image.png"),
    ]
}
export const Recnsioner={
    heading:"Recnsioner",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam ac justo id neque fermentum tristique.Fusce auctor ligula vitae justo vehicula, vel condimentum libero consequat.Vivamus euismod sapien nec justo fermentum, sit amet varius dui ultricies.Proin nec augue at leo tincidunt ultrices ac eu ex.Sed convallis quam non dui vulputate, vitae mattis tortor tincidunt.Integer vel ligula nec felis malesuada ullamcorper."
}
export const screenshots={
    firstButtonText:"Lat Oss Hjalpa Dig!",
    secondButtonText:"Lat Oss Hjalpa Dig!",
    items:[
        img("https://i.ibb.co/1fZ9rJw/image.png"),
        img("https://i.ibb.co/1fZ9rJw/image.png"),
        img("https://i.ibb.co/1fZ9rJw/image.png"),
        img("https://i.ibb.co/1fZ9rJw/image.png"),
        img("https://i.ibb.co/1fZ9rJw/image.png"),
        img("https://i.ibb.co/1fZ9rJw/image.png"),
    ]
}

export const questions={
    heading:"Vanliga Fragor",
    "items": [
        {
          "question": "Why is the sky blue?",
          "answer": "Because of the way the Earth's atmosphere scatters sunlight."
        },
        {
          "question": "Why do birds sing in the morning?",
          "answer": "It's a way for them to communicate and establish territory."
        },
        {
          "question": "Why do we dream at night?",
          "answer": "Dreaming is believed to help process emotions and memories."
        },
        {
          "question": "Why do cats purr?",
          "answer": "Cats purr as a form of communication and to show contentment."
        },
        {
          "question": "Why is the ocean salty?",
          "answer": "The ocean is salty due to the minerals and salts carried by rivers."
        },
        {
          "question": "Why do we yawn when we're tired?",
          "answer": "Yawning helps regulate the temperature of the brain."
        }
      ]
}

export const footer={
    footerButtonText:"Go Mig Min Butik!",
    firstParagraph:" Here is a paragraph of randomly generated 'mumbo jumbo':    In a world where the ziggurats of yore intertwine with the nebulous realms of quantum entanglement, one finds solace in the cacophony of ethereal whispers cascading through the cosmic tapestry. The enigmatic dance of quarks and leptons waltz in harmonious discord, painting a symphony of colors beyond the visible spectrum. As the chrono-synclastic infundibulum unfolds its fractal tendrils, the fabric of reality shimmers with kaleidoscopic fervor, revealing the ineffable secrets of the universe. Embrace the cosmic absurdity, for within the maelstrom of chaos lies the serendipitous essence of existence",

    finalParagraph:"This is placeholder text. Please insert the correct information here. Thank you!"
}



function img(src:string,alt="no alt text"){
    return ({src,alt})
}