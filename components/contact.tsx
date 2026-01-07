"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import emailjs from "@emailjs/browser"

type FormStatus = "idle" | "sending" | "success" | "error"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("sending")
    setErrorMessage("")

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setFormStatus("success")
      formRef.current?.reset()

      // Reset to idle after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("EmailJS error:", error)
      setFormStatus("error")
      setErrorMessage("Failed to send message. Please try again or email directly.")

      // Reset to idle after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Have a project in mind or want to connect? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-primary/10 hover:border-primary/20 transition-all duration-300 shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="from_name"
                        placeholder="Your name"
                        required
                        className="border-primary/10 focus:border-primary/30"
                        disabled={formStatus === "sending"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="from_email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="border-primary/10 focus:border-primary/30"
                        disabled={formStatus === "sending"}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="border-primary/10 focus:border-primary/30"
                      disabled={formStatus === "sending"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={6}
                      required
                      className="border-primary/10 focus:border-primary/30 resize-none"
                      disabled={formStatus === "sending"}
                    />
                  </div>

                  {/* Status Messages */}
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    className="w-full hover:scale-[1.02] transition-transform duration-200"
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full border-primary/10 hover:border-primary/20 transition-all duration-300 shadow-lg">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>

                  <div className="flex items-start gap-4 group">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:anand.jay426344@gmail.com" className="hover:text-primary transition-colors">
                          anand.jay426344@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">New Delhi, India</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-medium mb-3">Connect with me:</h4>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                      >
                        <Link href="https://github.com/Jayanand07" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                      >
                        <Link href="https://www.linkedin.com/in/jay-anand10" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                      >
                        <Link href="https://x.com/jayanand42634?s=21" target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
