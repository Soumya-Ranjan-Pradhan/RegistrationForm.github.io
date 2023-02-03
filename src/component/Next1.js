import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas'
const initialValues ={
  hsc:"",
  state:"",
  number:"",
  ssc:"",
  board:"",
  percentage:"",
  current:"",
  institution:"",
  overall:"",
  backlogs:"",
}
const Next1 = () => {

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit : (values) =>{
  console.log("🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values", values)
    }
  })
  console.log(errors)

const MyNavigates = useNavigate
const handleClick = () =>{
  MyNavigates("/form")
}

const MyNavigate = useNavigate()
const handleClick1 = () =>{
    MyNavigate("/next2")
}
  return (
    <div className="container">
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xdojkzno" method="POST">
        <div className="input-block">
                <label htmlFor="name">HSC Institution name<span>*</span></label>
                <br />
                <input type="text" autoComplete='off' name='hsc' size="77" value={values.hsc} onChange={handleChange} onBlur={handleBlur}
                 />
              </div>
              {errors.hsc && touched.hsc ? (
                      <p className="form-error">{errors.hsc}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">HSC Board(i.e CBSC,ICSC or State board)<span>*</span></label>
                <br />
                <input type="text" autoComplete='off' name='state' size="77"
                value={values.state} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.state && touched.state ? (
                      <p className="form-error">{errors.state}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">Score in HSC in percentage<span>*</span></label>
                <br />
                <input type="number" autoComplete='off' name='number' size="35"
                value={values.number} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.number && touched.number ? (
                      <p className="form-error">{errors.number}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">SSC Institution name<span>*</span></label>
                <br />
                <input type="text" autoComplete='off' name='ssc' size="77"
                value={values.ssc} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.ssc && touched.ssc ? (
                      <p className="form-error">{errors.ssc}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">SSC Board(i.e CBSC,ICSC or State board)<span>*</span></label>
                <br />
                <input type="text" autoComplete='off' name='board' size="77" 
                  value={values.board} onChange={handleChange} onBlur={handleBlur}
                /> 
              </div>
              {errors.board && touched.board ? (
                      <p className="form-error">{errors.board}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">Score in SSC in percentage<span>*</span></label>
                <br />
                <input type="number" autoComplete='off' name='percentage' size="35"
                value={values.percentage} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.percentage && touched.percentage ? (
                      <p className="form-error">{errors.percentage}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">Current pursuing<span>*</span></label>
                <br />
                <input type="text" autoComplete='off' name='current' size="77"
                value={values.current} onChange={handleChange} onBlur={handleBlur} /> 
              </div>
              {errors.current && touched.current ? (
                      <p className="form-error">{errors.current}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">Current educational institution name<span>*</span></label>
                <br />
                <input type="text" autoComplete='off' name='institution' size="77"
                value={values.institution} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.institution && touched.institution ? (
                      <p className="form-error">{errors.institution}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">Overall percentage<span>*</span></label>
                <br />
                <input type="number" autoComplete='off' name='overall' size="35"
                value={values.overall} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.overall && touched.overall ? (
                      <p className="form-error">{errors.overall}</p>
                    ) : null}

              <div className="input-block">
                <label htmlFor="name">Current backlogs if any<span>*</span></label>
                <br />
                <input type="number" autoComplete='off' name='backlogs' size="35"
                value={values.backlogs} onChange={handleChange} onBlur={handleBlur} />
              </div>
              {errors.backlogs && touched.backlogs ? (
                      <p className="form-error">{errors.backlogs}</p>
                    ) : null}
              <div className="btn">
              <button onClick={handleClick}>Previous</button>
              <button onClick={handleClick1}>Next Page</button>
              </div>
        </form>
    </div>
  )
}

export default Next1