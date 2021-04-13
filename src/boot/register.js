import CustomDialog from 'components/CustomDialog.vue'

export default ({ app }) => {
  console.log('Registering component', CustomDialog)
  app.component('CustomDialog', CustomDialog)
}
