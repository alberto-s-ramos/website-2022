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
                'Excited by the entire spectrum of software development, with a special interest in',
                <span className='highlighted' key={'chat_highlighted-msg-4'}> frontend</span>,
                ',',
                <span className='highlighted' key={'chat_highlighted-msg-5'}> design</span>,
                ', and',
                <span className='highlighted' key={'chat_highlighted-msg-6'}> blockchain technologies</span>,
                '.',
                <br key={'chat_br-3'}/>, <br key={'chat_br-4'}/>,
                'I hope this website allows you to get to know me a bit better.'
            ],
    },
    {
        id: 3,
        text:
            [
                'If you fancy shortcuts, here’s a less exciting way of presenting what I’ve been up to:',
                <a className="custom-button" key={'chat_btn-1'} href='/assets/Resume.pdf' target='_blank' aria-label='Resume'>
                    <span className='highlighted' key={'chat_highlighted-msg-7'}>Resume</span>
                </a>,
            ]
    }
];
