const formatDate = date => {
  return new Date(date).toLocaleDateString('pt-br', {
    year: '2-digit',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default formatDate
