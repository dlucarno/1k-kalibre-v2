import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import Image from 'next/image'
import { motion } from 'framer-motion'

const SignupSchema = Yup.object({
  name: Yup.string().required('Required'),
  emailAddress: Yup.string().email('Invalid email address').required('Required'),
  phoneNumber: Yup.string().required('Required'),
  companyName: Yup.string().required('Required')
});

export default function SignUpForm() {
  const addTodo = async (name, firstname, tel) => {
    if (name && firstname && tel) {
      const result = await axios.post("http://localhost:1337/api/suscribers", {
        name: name,
        firstname: firstname,
        tel: tel,
      });
      setTodos([...suscribers, result?.data]);
    }
  };

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
          prenom: '',
          phoneNumber: '',
        }}
        validationSchema={SignupSchema}
        value="Add Todo"
          onClick={() => {
            addTodo(name.value,firstname.value,tel.value);
            name.value = "";
            firstname.value = "";
            tel.value = "";
          }}
        // onSubmit={(values, { setSubmitting }) => {
        //   setTimeout(() => {
        //     setSubmitting(false);
        //     addTodo(name.value,firstname.value,tel.value );
        //     name.value = "";
        //     firstname.value = "";
        //     tel.value = "";
            
        //   }, 400);
        // }}
      >
        {({ errors, touched }) => (
          <Form className="signup-form">
            <img
                src='/assets/home/1kkalibre.jpg'
                width={340}
                height={390}
            />
            


            {/* <label className="sr-only" htmlFor="name">Nom</label>
            <Field name="name" placeholder="Nom" className={errors.name && touched.name ? 'error': ''} />
            <label className="sr-only" htmlFor="name">Prénom</label>
            <Field name="prenom" placeholder="Prénom" className={errors.name && touched.name ? 'error': ''} />
            <label className="sr-only" htmlFor="phoneNumber">Numéro Whatsapp</label>
            <Field name="phoneNumber" placeholder="Numéro Whatsapp" className={errors.phoneNumber && touched.phoneNumber ? 'error': ''} />
            <button className="btn btn--blue btn--blue--signup" type="submit">Rejoindre la liste d'attente</button> */}
          </Form>
        )}
      </Formik>
    </motion.section>
  )
}
