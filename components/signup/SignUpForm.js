import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import PlanSelector from './PlanSelector'
import { motion } from 'framer-motion'

const SignupSchema = Yup.object({
  name: Yup.string().required('Required'),
  emailAddress: Yup.string().email('Invalid email address').required('Required'),
  phoneNumber: Yup.string().required('Required'),
  companyName: Yup.string().required('Required')
});

export default function SignUpForm() {

  return (
    <motion.section 
      initial={{ opacity: 0, y: -90 }}
      animate={{ opacity: 1, y: 0, 
        transition : {
          type: "spring",
          delay: 0.5
      }}}
    className="signup-form-wrap">
      <Formik
        initialValues={{
          name: '',
          emailAddress: '',
          plan: 'Basic Pack',
          phoneNumber: '',
          companyName: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ errors, touched }) => (
          <Form className="signup-form">
            <label className="sr-only" htmlFor="name">name</label>
            <Field name="name" placeholder="Name" className={errors.name && touched.name ? 'error': ''} />
            <label className="sr-only" htmlFor="emailAddress">Email Address</label>
            <Field name="emailAddress" placeholder="Email Address" className={errors.emailAddress && touched.emailAddress ? 'error': ''} />
            <label className="sr-only" htmlFor="phoneNumber">Phone Number</label>
            <PlanSelector />
            <Field name="phoneNumber" placeholder="Phone Number" className={errors.phoneNumber && touched.phoneNumber ? 'error': ''} />
            <label className="sr-only" htmlFor="companyName">Company</label>
            <Field name="companyName" placeholder="Company" className={errors.companyName && touched.companyName ? 'error': ''} />
            <button className="btn btn--blue btn--blue--signup" type="submit">Get on the list</button>
          </Form>
        )}
      </Formik>
    </motion.section>
  )
}
