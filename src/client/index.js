import { checkForName } from './js/checkURL';
import { handleSubmit } from './js/formHandler';
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/footer.scss'


window.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('sbtn')
    submitBtn.addEventListener('click', (e) => {
        handleSubmit(e)
    })
})

export {
    checkForName,
    handleSubmit
}