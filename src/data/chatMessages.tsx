export const chatMessages = [
    {
        id: 1,
        text:
        [
            'Hello, I’m',
            <span className='highlighted' key={'chat_highlighted-msg-1'}> Alberto</span>,
            ', a ',
            <span className='highlighted' key={'chat_highlighted-msg-2'}> Software Engineer</span>,
            '. Welcome to my website. 👋'
        ],
    },
    {
        id: 2,
        text:
            [
                'Originally from Portugal, currently living in ',
                <span className='highlighted' key={'chat_highlighted-msg-3'}> Berlin, Germany</span>,
                ', I consider myself a hardworking person with a creativity vein and attention to detail.',
                <br key={'chat_br-1'}/>, <br key={'chat_br-2'}/>,
                'I hope this website allows you to get to know me a bit better.'
            ],
    },
    {
        id: 3,
        text:
            [
                'If you fancy shortcuts, here’s a less exciting way of presenting what I’ve been up to:',
                <a className="custom-button" key={'chat_btn-1'} href='/assets/Resume.pdf' target='_blank'><span className='highlighted' key={'chat_highlighted-msg-4'}>Resume</span></a>,
            ]
    }
];
