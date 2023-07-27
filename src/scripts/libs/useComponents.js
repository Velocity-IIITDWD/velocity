export default function useComponents(components) {
    components.forEach(component => {
      const { name, template, initiator } = component
  
      const componentElement = document.querySelector(
        `[data-component="${name}"]`
      )
  
      if (componentElement) {
        componentElement.innerHTML = template
  
        if (initiator) {
          initiator()
        }
      }
    })
  }
  