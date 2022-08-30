<template>
    <div class="auth--container">
        <div class="secondAuth--container">
            <div class="container--title">
                <div class="container__image">
                    <img src="../assets/logoTr.png" alt="PaP_logo">
                </div>
                <div class="container__title">
                    <h1>Ask</h1>
                </div>
            </div>
        </div>
        <div class="auth--container">
            <div class="credentials__container">
                <div class="input">
                    <i class="fas fa-user"></i><input type="text" name="username" id="username" v-model="username" placeholder="Nom d'utilisateur">
                </div>
                <div class="input">
                    <i class="fas fa-lock"></i>
                    <input type="password" name="password" id="password" v-model="password" placeholder="Mot de passe">
                </div>
            </div>
        </div>
        <div class="button">
            <button disabled="disabled">Connexion</button>
        </div>
    </div>
</template>