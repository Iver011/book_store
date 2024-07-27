def render_user_list(users):
    return [
        {
            "username":user.username,
            "email":user.email,
            "password":user.password,
            "role":user.role
        }for user in users
    ]

