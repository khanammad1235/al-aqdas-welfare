export default function GoogleMap() {
  return (
    <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4020206123087!2d72.83977759999999!3d18.9578447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce25583a86c3%3A0x847a2a27ce9f2979!2sAl%20Aqdas%20Welfare%20Association!5e0!3m2!1sen!2sin!4v1783413334391!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '400px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Al Aqdas Welfare Association Location"
      />
    </div>
  )
}
