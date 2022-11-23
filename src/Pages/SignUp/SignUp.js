import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseToken from '../../hooks/UseToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = UseToken(createdUserEmail);
    const navigate = useNavigate();
    if (token) {
        navigate('/');
    }


    const handleSignUp = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);

                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    // Login With Google 

    const handleGoogleLogin = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(er => console.error(er));
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-center text-xl'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text'  {...register("name", {
                            required: 'Without your name you can not Sign Up'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-[12px] text-red-600 pt-3'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' {...register("email", {
                            required: 'Email is required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-[12px] text-red-600 pt-3'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password", {
                            required: 'Password is Required',
                            minLength: { value: 6, message: 'Your password must be at least 6 characters or longer' },
                            pattern: { value: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/, message: 'Your password must be strong' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-[12px] text-red-600 pt-3'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-5' value='Sign Up' type="submit" />
                    {
                        signUpError && <p className='text-[12px] text-red-600 pt-3'>{signUpError}</p>
                    }
                </form>
                <p className='mt-3'>
                    <span>Already have an account?
                        <Link className='text-secondary' to='/login'> Please Login</Link>
                    </span>
                </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;












