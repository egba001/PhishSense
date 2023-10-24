import arrow from './../assets/arrow.svg';
import { useState } from 'react';

const VerificationReport = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className='relative pb-12'>
            <div className="flex items-center space-x-6 cursor-pointer" onClick={() => {setIsOpen(!isOpen)}}>
                <span className='text-dark text-[18px] lg:text-[24px] font-bold'>Link Verification Report</span>
                <img src={arrow} alt="Arrow" className={isOpen ? "rotate-180 transition-all duration-400" : "rotate-0 transition-all duration-400"} />
            </div>
            { isOpen &&
            <div className='absolute'>
                <h3>URL: url</h3>
                <h4>Status: <span className='text-red-500'>Insecure</span></h4>
                <h5 className='mb-6'>Summary: This link has been identified as suspicious due to the following reasons:</h5>

                <div className='w-full mb-8'>
                    <h5 className='font-extrabold mb-3'>Reasons for Suspicion</h5>
                    <ol>
                        <li><span className='font-bold'>1. Phishing Attempt:</span> The link may be trying to impersonate a legitimate website to steal your personal information, such as usernames and passwords.</li>
                        <li><span className='font-bold'>2. Malware Risk:</span> Clicking on this link could lead to the installation of malicious software on your device.</li>
                        <li><span className='font-bold'>3. Untrusted Source:</span> The website associated with this link is not from a trusted source or has a history of malicious activity.</li>
                    </ol>
                </div>
                <div className='w-full mb-12'>
                    <h5 className='font-extrabold mb-3'>Recommended Actions</h5>
                    <ol>
                        <li><span className='font-bold'>1. Do Not Click:</span> Avoid clicking on this link. It may lead to harm or compromise your online security.</li>
                        <li><span className='font-bold'>2. Report the Link:</span> If you encountered this link on a social media platform, please report it to the platform&#39;s support for further investigation.</li>
                        <li><span className='font-bold'>3. Run a Full Malware Scan:</span> Consider running a full malware scan on your device to ensure it hasn&#39;t been compromised.</li>
                    </ol>
                </div>
                <p><span className='font-bold text-xl'>Additional Information:</span> For more information on how to stay safe online and protect your digital identity, visit our safety tips section.</p>
            </div>
            }
        </div>
    )
}

const Secure = () => {
    return (
        <div className='absolute'>
                <h3>URL: url</h3>
                <h4>Status: <span className='text-green-500'>Secure</span></h4>
                <h5 className='mb-6'>Summary: This link has been verified as safe and not associated with any known security risks. It meets our criteria for authenticity and security.</h5>

                <div className='w-full mb-8'>
                    <h5 className='font-extrabold mb-3'>Reasons for Suspicion</h5>
                    <ol>
                        <li><span className='font-bold'>1. Authentic Source:</span> The link is associated with a known and trusted source.</li>
                        <li><span className='font-bold'>2. No Malware Detected:</span> No malicious software or threats have been found in the link.</li>
                        <li><span className='font-bold'>3. No Phishing Attempts:</span> There is no indication of phishing or attempts to collect personal information.</li>
                    </ol>
                </div>
                <div className='w-full mb-12'>
                    <h5 className='font-extrabold mb-3'>Recommended Actions</h5>
                    <ol>
                        <li><span className='font-bold'>1. Proceed Safely:</span> You can confidently visit this link without significant security concerns.</li>
                        <li><span className='font-bold'>2. Stay Informed:</span> Continue to exercise caution and stay informed about online security best practices.</li>
                    </ol>
                </div>
                <p className='mb-7'><span className='font-bold text-xl'>Additional Information:</span> For more information on how to stay safe online and protect your digital identity, visit our safety tips section.</p>
                <p>Please keep in mind that while this link has been verified as safe, it's always wise to remain vigilant and practice good online security habits.</p>
            </div>
    )
}

export default VerificationReport;