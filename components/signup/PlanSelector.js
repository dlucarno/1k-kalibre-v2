import React, { useState } from 'react'
import { Field } from 'formik'

const fieldName = 'plan'

export default function PlanSelector() {
  const [isActive, setIsActive] = useState(false)
  const [plans, setPlans] = useState([
    { planName: 'Basic Pack', price: 'Free', isSelected: true },
    { planName: 'Pro Pack', price: '$9.99', isSelected: false },
    { planName: 'Ultimate Pack', price: '$19.99', isSelected: false }
  ])

  const handlePlanClick = (planName) => {
    setPlans(
      plans.map((plan) => {
        const changedPlan = {...plan}
        
        if (plan.planName === planName) {
          changedPlan.isSelected = true
        } else {
          changedPlan.isSelected = false
        }
        return changedPlan
      })
    )
    setIsActive( prev => !prev )
  }

  const getSelectedPlan = () => {
    let selectedPlan = {}
    plans.forEach(plan => {
      if (plan.isSelected) {
        selectedPlan.planName = plan.planName
        selectedPlan.price = plan.price
      }
    })
    return selectedPlan
  }

  return (
    <Field name={fieldName} id={fieldName} type="text">
    {({ form: { setFieldValue } }) => (
      <div className="plan-selector-container">
        <label htmlFor={fieldName} className={"sr-only"}>{fieldName}</label>
        <button onClick={() => setIsActive( prev => !prev )} type="button" className="plan-selector">
          <div className="plan-selector__plan">
            {getSelectedPlan().planName} <span>{getSelectedPlan().price}</span>
          </div>
          <div className={`plan-selector__arrow${isActive ? ' active': ''}`}></div>
        </button>
        <div className={`plan-selector__menu${isActive ? ' active': ''}`}>
          { plans.map(plan => (
          <div 
            key={plan.planName}
            onClick={() => {
              handlePlanClick(plan.planName)
              setFieldValue(fieldName, plan.planName)
            }}
            className={`plan-selector__menu__item${plan.isSelected ? ' selected' : ''}`}
          >
            {plan.planName} <span>{plan.price}</span>
          </div>
          )) }
        </div>
      </div>
    )}
  </Field>
  )
}