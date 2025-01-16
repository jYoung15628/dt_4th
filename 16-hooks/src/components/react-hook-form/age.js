import React from 'react'
import { useForm } from 'react-hook-form';

export default function Age() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('폼 제출 성공 : ', data);
    };

    const onError = (err) => {
        console.log('폼 제출 실패 : ', err);
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor="name">이름</label>
                <input
                    type="text"
                    placeholder="name "
                    id="name"
                    {...register('name', {
                        required: '이름은 필수 항목입니다.',
                        minLength: {
                            value: 1,
                            message: '이름은 최소 한한글자 이상 작성해주세요',
                        },
                    })}
                />
                {errors.name?.message}
                <label htmlFor="age">나이</label>
                <input
                    type="text"
                    placeholder="age"
                    id="age"
                    {...register('age', {
                        required: '나이는 필수 항목입니다',
                        minLength: {
                            value:1
                        },
                        pattern: {
                            value: /^[0-9]+$/,
                            message:
                                '나이는 0이상의 숫자만 입력 가능합니다',
                        },
                    })}
                />
                {errors.age?.message}
                <button type="submit">제출</button>
            </form>
        </div>
    );
}
