/**
 * @description Helper function that simulates a submit call
 * @param {form} form ShallowWrapper object queries by Enzyme
 */
export const triggerOnSubmit = form => {
  form.simulate('submit', { preventDefault: () => undefined })
}

/**
 *
 * @param {form} form ShallowWrapper object queries by Enzyme
 * @param {formField} formField An object containing the name and value of the form field
 */
export const triggerOnChange = form => formField => {
  const {
    name,
    value
  } = formField
  form.find(`input[name="${name}"]`)
    .simulate('change', { target: { value, name } })
}
