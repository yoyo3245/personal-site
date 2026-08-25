import '../styles/Footer.css';

const links = [
  { icon: 'bi-envelope-fill', label: 'ye38@cornell.edu', href: 'mailto:ye38@cornell.edu', external: false },
  { icon: 'bi-linkedin', label: 'linkedin.com/in/yosephendawoke', href: 'https://www.linkedin.com/in/yosephendawoke', external: true },
  { icon: 'bi-github', label: 'github.com/yoyo3245', href: 'https://github.com/yoyo3245', external: true }
];

function Contact() {
  return (
    <div id='contact' className='contact'>
      <h1 className='text-center font-bold text-5xl section-heading mb-4'>Contact Me</h1>
      <p className='contact-subtitle'>
        Feel free to reach out for collaborations or just to say hello!
      </p>

      <div className='contact-links'>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className='contact-link'
          >
            <i className={`bi ${link.icon}`}></i>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
