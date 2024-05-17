export default class ValidationRegex {
    static validateEmail(email: string) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const succeeded = emailRegex.test(email)
        return {
            succeeded,
            failed: !succeeded,
        }
    }
}
