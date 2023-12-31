import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  // Remove #!/ for fixing s3 routing issue
  const router = useRouter();
  const path = (/#!(\/.*)$/.exec(router.asPath) || [])[1];
  if (path) {
    router.replace(path);
  }

  return <Component {...pageProps} />
}
