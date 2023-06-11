import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
      <h1>hello Next.js</h1>
      <Image src="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjY4OTkyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" width={500} height={300} alt="Your Name" />
    </div>
  )
}