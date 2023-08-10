export default function removeComponents(components) {
    components.forEach(component => {
      const {name} = component
  
      const componentElement = document.querySelector(
        `[data-component="${name}"]`
      )
        componentElement.remove();

    })
  }
  