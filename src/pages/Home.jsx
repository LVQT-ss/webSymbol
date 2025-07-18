import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CheckCircle,
  MessageCircle,
  Monitor,
  Smartphone,
  Eye,
  Headphones,
  Download,
  ThumbsUp,
  Star,
  Play,
  Send,
  Copyright,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

// Import images
import appStoreLogo from "../assets/ios-app-store.webp";
import googlePlayLogo from "../assets/google-play.webp";
import reactLogo from "../assets/react.svg";
import yellowBg from "../assets/yellow-background.png";
import logo from "../assets/app-logo.jpg";
export default function MobileAppLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative w-full top-0 z-50">
        {/* Top Contact Bar */}
        {/* <div className="bg-gradient-to-r from-green-400 to-yellow-500 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Info@youremail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">(480) 555-0103</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Facebook className="w-4 h-4 hover:text-blue-300 cursor-pointer" />
                <Instagram className="w-4 h-4 hover:text-pink-300 cursor-pointer" />
                <Twitter className="w-4 h-4 hover:text-blue-300 cursor-pointer" />
                <Youtube className="w-4 h-4 hover:text-red-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div> */}

        {/* Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main navigation */}
            <div className="flex items-center justify-between py-4">
              {/* Left Navigation - Fixed width */}
              <div className="hidden md:flex items-center space-x-8 flex-1">
                <a
                  href="#"
                  className="hover:text-yellow-600 transition-colors font-medium uppercase"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-600 transition-colors font-medium uppercase"
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-600 transition-colors font-medium uppercase"
                >
                  Features
                </a>
              </div>

              {/* Logo - Centered */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <span className="text-xl font-bold tracking-wide text-gray-900">
                  APPOLLY
                </span>
              </div>

              {/* Right Navigation - Fixed width */}
              <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
                <a
                  href="#"
                  className="hover:text-yellow-600 transition-colors font-medium uppercase"
                >
                  Screenshot
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-600 transition-colors font-medium uppercase"
                >
                  Blog
                </a>
                <Button className="bg-yellow-600 text-white hover:bg-yellow-700 font-semibold px-6 py-2 rounded-md uppercase">
                  Download
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-3">
                <div className="space-y-1">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-yellow-600 bg-yellow-50"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                  >
                    Screenshot
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                  >
                    Blog
                  </a>
                  <div className="px-3 py-2">
                    <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700 uppercase">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:min-h-[calc(100vh-4rem)]">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${yellowBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h1 className="text-4xl lg:text-5xl font-bold uppercase mb-6 leading-tight">
                  A Great App Makes Your Life Better
                </h1>
                <p className="text-lg mb-8 text-white/80">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold uppercase">
                    Download App Now
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={appStoreLogo}
                      alt="App Store"
                      className="h-20 w-auto max-w-[calc(100%-1rem)] object-contain"
                    />
                    <img
                      src={googlePlayLogo}
                      alt="Google Play"
                      className="h-20 w-auto max-w-[calc(100%-1rem)] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end relative">
              <div className="w-full max-w-lg xl:max-w-xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-[2.5rem] blur-xl opacity-50 animate-pulse"></div>
                  <img
                    src="/app-mockup.png"
                    alt="Mobile App Mockup"
                    className="relative rounded-[2rem] shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 uppercase mb-4">
              About Our App
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-blue-200 rounded-[2rem] blur-xl opacity-50"></div>
              <img
                src="/app-features.png"
                alt="Android Smartphone"
                className="relative rounded-[2rem] shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6">
              <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 uppercase mb-2">
                      Creative Design
                    </h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Viverra nunc ante velit vitae. Est tellus vitae, nullam
                      lobortis enim.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 uppercase mb-2">
                      Easy to Use
                    </h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Viverra nunc ante velit vitae. Est tellus vitae, nullam
                      lobortis enim.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 uppercase mb-2">
                      Best User Experience
                    </h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Viverra nunc ante velit vitae. Est tellus vitae, nullam
                      lobortis enim.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-blue-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold uppercase mb-4">
              App Features
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Features */}
            <div className="space-y-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Full Free Chat",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                  icon: Monitor,
                  title: "Unlimited Features",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                  icon: Eye,
                  title: "Awesome UI Design",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-white/90" />
                  <h3 className="text-xl font-semibold uppercase mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Phone */}
            <div className="relative flex justify-center py-8">
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
              <img
                src={reactLogo}
                alt="App Interface"
                className="relative max-w-xs w-full rounded-[2.5rem] shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right Features */}
            <div className="space-y-8">
              {[
                {
                  icon: Smartphone,
                  title: "iOS & Android Version",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                  icon: Eye,
                  title: "Retina Ready Graphics",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                  icon: Headphones,
                  title: "24/7 Support",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-white/90" />
                  <h3 className="text-xl font-semibold uppercase mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">
              Checkout Our App Interface Look
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center space-x-4 overflow-hidden">
              <img
                src="/placeholder.svg?height=532&width=246"
                alt="App Screen 1"
                className="rounded-3xl shadow-lg"
              />
              <img
                src="/placeholder.svg?height=532&width=246"
                alt="App Screen 2"
                className="rounded-3xl shadow-lg"
              />
              <img
                src="/placeholder.svg?height=622&width=319"
                alt="App Screen 3"
                className="rounded-3xl shadow-lg transform scale-110"
              />
              <img
                src="/placeholder.svg?height=532&width=245"
                alt="App Screen 4"
                className="rounded-3xl shadow-lg"
              />
              <img
                src="/placeholder.svg?height=532&width=245"
                alt="App Screen 5"
                className="rounded-3xl shadow-lg"
              />
            </div>

            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-yellow-600 text-yellow-600 bg-transparent"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${
                      i === 0
                        ? "bg-yellow-600 border-2 border-yellow-600"
                        : "bg-yellow-600"
                    }`}
                  />
                ))}
              </div>
              <Button
                size="icon"
                className="rounded-full bg-yellow-600 hover:bg-yellow-700"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">
                Download App Now
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>

              <div className="flex space-x-4 mb-8">
                <img
                  src="/placeholder.svg?height=47&width=149"
                  alt="App Store"
                  className="h-12"
                />
                <img
                  src="/placeholder.svg?height=45&width=151"
                  alt="Google Play"
                  className="h-12"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-yellow-600 text-white p-6 text-center">
                  <Download className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">59865</div>
                  <div className="text-sm uppercase">Download</div>
                </Card>
                <Card className="bg-yellow-600 text-white p-6 text-center">
                  <ThumbsUp className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">29852</div>
                  <div className="text-sm uppercase">Like</div>
                </Card>
                <Card className="bg-yellow-600 text-white p-6 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">1500</div>
                  <div className="text-sm uppercase">5 Star Rating</div>
                </Card>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=480&width=516"
                alt="App Design"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Video */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4">
            How to Use the App Perfectly
          </h2>
          <p className="mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
          </p>

          <div className="relative">
            <div className="bg-gradient-to-r from-yellow-600/40 to-blue-600/40 rounded-lg h-80 flex items-center justify-center">
              <Button
                size="lg"
                className="rounded-full bg-white/20 hover:bg-white/30 p-6"
              >
                <Play className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">
              Our Creative Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Carla Press", role: "App Developer" },
              { name: "Craig Gouse", role: "UI/UX Designer" },
              { name: "Jocelyn Septimus", role: "Website Developer" },
            ].map((member, index) => (
              <Card key={index} className="text-center p-6">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full border-4 border-yellow-600 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=198&width=198"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 uppercase mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae.
                </p>
                <div className="flex justify-center space-x-4">
                  <Facebook className="w-5 h-5 text-yellow-600" />
                  <Instagram className="w-5 h-5 text-gray-800" />
                  <Twitter className="w-5 h-5 text-gray-800" />
                  <Youtube className="w-5 h-5 text-gray-800" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase mb-4">
              Our Happy Customers
            </h2>
            <p className="max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <Card
                key={index}
                className="bg-white text-gray-800 p-6 text-center"
              >
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Customer"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold uppercase mb-2">Ann Lubin</h3>
                <p className="text-gray-600 uppercase mb-4">Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim.
                </p>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full ${
                  i === 0 ? "border-2 border-white" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">
              Our Recent Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "The Snap Pixel: How It Works and How to Install",
              "Global Partner Solutions: A Partnership of Innovation",
              "2021: An opportunity for Snapchatters to start fresh",
            ].map((title, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src="/placeholder.svg?height=228&width=370"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 uppercase mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra nunc ante velit vitae. Est tellus vitae, nullam
                    lobortis enim.
                  </p>
                  <a
                    href="#"
                    className="text-yellow-600 font-semibold uppercase underline"
                  >
                    Read more
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 -mb-16 relative z-10">
        <Card className="bg-white shadow-2xl rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 lowercase">
                  info@youremail.com
                </h3>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  +880 321 655 9985
                </h3>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4">Logo</h3>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-yellow-600" />
                <Instagram className="w-5 h-5" />
                <Twitter className="w-5 h-5" />
                <Youtube className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold uppercase mb-4">
                Quick Link
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Screenshot
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div></div>

            <div>
              <h4 className="text-xl font-semibold uppercase mb-4">
                News Letter
              </h4>
              <p className="text-gray-300 mb-4">
                Subscribe our newsletter to get our latest update & news
              </p>
              <div className="flex">
                <Input
                  placeholder="Your email address"
                  className="rounded-r-none bg-white text-gray-800"
                />
                <Button className="bg-yellow-600 hover:bg-yellow-700 rounded-l-none">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 mb-4" />

          <div className="flex items-center justify-center">
            <Copyright className="w-5 h-5 mr-2" />
            <span>Copyright 2021 .Ojjomedia. All Right Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
