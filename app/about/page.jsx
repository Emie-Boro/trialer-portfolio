const AboutPage = () => {
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold text-white md:text-lg sm:text-sm sm:font-semibold">/about-me</h1>
      <div className="flex items-center md:items-end sm:flex-col">
        <div className="m-5">
          <img src="/assets/about-me.png" className="w-56 md:w-22 sm:w-40" alt="" />
        </div>
        <div className="w-2/3 sm:w-full text-justify sm:text-sm">
          <p className="">Hi there! I'm <span className="text-primary">Emiedonmokumo Dick-Boro</span>, a passionate web developer. My coding journey started at 19 when I moved beyond boring typing exercises and discovered HTML, CSS, and JavaScript. YouTube tutorials, especially from Traversy Media, became my go-to resource and inspired me to build my first application.</p>
          <p className="my-5">Although I faced challenges, particularly with JavaScript, I overcame them by creating a React application, which marked a turning point in my learning. This led to my admission to AltSchool Africa through a federal government program.</p>
          <p>Now, I have experience in Express, Node.js, MongoDB, Next.js, and REST APIs. I love learning new technologies and staying updated with industry trends. I'm always eager to learn from others and take on new challenges in web development.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
