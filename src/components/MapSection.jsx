export default function MapSection() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">Find Us</p>
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">We're Right Here</h2>
        <p className="text-gray-400 text-base mb-8">Easily accessible — drop by anytime!</p>

        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg h-80 sm:h-96">
          <iframe
            title="E Stop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4!2d77.4818545!3d12.9582564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f0025971be1%3A0x3925ece2f61b2b68!2sE%20Stop!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
