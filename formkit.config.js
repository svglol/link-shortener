import { generateClasses } from '@formkit/themes';

export default {
  config: {
    classes: generateClasses({
      text: {
        outer: 'mb-5 formkit-disabled:opacity-40',
        label: 'label text-sm formkit-invalid:text-red-500',
        inner: 'formkit-invalid:border-red-500',
        input: 'input input-bordered input-primary w-full formkit-invalid:input-error',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
      submit: {
        input: 'formkit-input btn btn-primary w-full formkit-submitted:loading',
      },
    }),
  },
};
