const Safety = () => {
    return (
        <div>
            <h3 className="font-bold text-dark text-2xl mb-8">Safety tips</h3>
            <article className="mb-6">
                <h4 className="text-dark text-xl font-medium">Use strong, unique passwords</h4>
                <p>Create complex passwords for your online accounts, and ensure that each account has a unique password. Use a combination of letters, numbers, and special characters.</p>
            </article>
            <article className="mb-6">
                <h4 className="text-dark text-xl font-medium">Enable Two-Factor Authentication :</h4>
                <p>Activate 2FA whenever possible to add an extra layer of security to your online accounts. This typically involves receiving a one-time code on your phone or email for login.</p>
            </article>
            <article className="mb-6">
                <h4 className="text-dark text-xl font-medium">Verify Links Before Clicking:</h4>
                <p>Use a trusted link verification tool or browser extension to check the authenticity of links, especially those received via email or social media.</p>
            </article>
            <article className="mb-6">
                <h4 className="text-dark text-xl font-medium">Be Wary of Phishing Attempts</h4>
                <p>Always exercise caution when receiving unsolicited emails or messages asking for personal information or login credentials. Verify the sender&#39;s identity before responding to any requests.</p>
            </article>
        </div>
    )
}

export default Safety;