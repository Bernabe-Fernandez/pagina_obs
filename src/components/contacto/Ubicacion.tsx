export default function Ubicacion() {
  return (
    <section className="w-full bg-blue-900 py-12">
      <h2 className="text-center text-white text-3xl font-bold tracking-wide mb-10">
        NUESTRA UBICACIÓN
      </h2>

      <div className="relative w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.1291271917225!2d-103.3887455054544!3d20.74555973375442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b212d9cdf0bf%3A0xd508456fcde04be4!2sOmnibandas%20Belting%20Services!5e0!3m2!1ses-419!2smx!4v1774021873362!5m2!1ses-419!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

        <a
          href="https://maps.app.goo.gl/tfishs2RHUXUqejt9"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        ></a>
      </div>
    </section>
  );
}