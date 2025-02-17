import Head from 'next/head';
import Script from 'next/script';
import "./Waitlist.css"

const cssLoader = `
let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css';
head.appendChild(link);
`

export default function Waitlist() {

    return (
        <>
            <Script id='' type="" dangerouslySetInnerHTML={{ __html: cssLoader }}></Script>
            <Script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></Script>
            <div id="getWaitlistContainer" data-waitlist_id="20756" data-widget_type="WIDGET_2"></div>
        </>
    )
}
