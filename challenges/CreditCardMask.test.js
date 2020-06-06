const CreditCardMask = require('./CreditCardMask')


test('should mask all charachters except the last four', () => {
expect(CreditCardMask.execute('4556364607935616')).toMatch('############5616')
expect(CreditCardMask.execute('1')).toMatch('1')
expect(CreditCardMask.execute('11111')).toMatch('#1111')
})
