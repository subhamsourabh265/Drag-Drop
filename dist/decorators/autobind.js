// autobind decorator
console.log('autobind');
export const autobind = (_, _1, descriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundfn = originalMethod.bind(this);
            return boundfn;
        },
    };
    return adjDescriptor;
};
//# sourceMappingURL=autobind.js.map