const numberGroupToArray = (numberGroup: string) => {
    const [first, second] = numberGroup.split('-');

    const firstNumber = parseInt(first)
    const secondNumber = parseInt(second)

    return Array.from(
        {length: (secondNumber - firstNumber + 1)},
        (v, k) => k + firstNumber)
}

export default numberGroupToArray