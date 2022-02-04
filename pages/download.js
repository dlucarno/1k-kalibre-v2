import Layout from '../components/Layout'
import SignUpCountDown from '../components/signup/SignUpCountDown'
import SignUpForm from '../components/signup/SignUpForm'
import SignUpHero from '../components/signup/SignUpHero'
import SignupSideBg from '../components/signup/SignupSideBg'

export default function signup() {
  return (
    <Layout isSignUp={true} >
      <SignUpHero />
      <SignUpCountDown isStatic={false} />
      <SignUpForm />
      <SignupSideBg />
    </Layout>
  )
}
