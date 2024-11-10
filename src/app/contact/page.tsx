
const page = () => {
  return (
    <div id="contact-container">
      <h1 id="contact-title" >CONTACT ME</h1>
      <p>
      Get in touch today to discuss your project needs or any inquiries. We are here to provide personalized assistance and expert solutions to bring your digital ideas to life. Reach out now!
      </p>
      <div id="contact-form">
      <div id="form-input">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <textarea name="message" id="message" rows={3} placeholder="Message"></textarea>

        <button>Send Message</button>
      </div>

        <map>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7239.739029092916!2d67.19077603374697!3d24.868305811695993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb330aed6e64901%3A0x549ade1e16dbb2c6!2sGohar%20Green%20City%20Bagh%20e%20Ibrahim%20Society%20Shah%20Faisal%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731093889715!5m2!1sen!2s" width="350" height="350"   loading="eager"></iframe>
        </map>

      </div>
    </div>
  )
}

export default page
