<template>
    <div class="signup">
        <h2>Inscription</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Nom</label>
                <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    :class="{ 'input-error': errors.name }"
                    placeholder="Entrez votre nom"
                />
                <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </div>

            <div>
                <label for="email">Email</label>
                <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    :class="{ 'input-error': errors.email }"
                    placeholder="Entrez votre email"
                />
                <span v-if="errors.email" class="error">{{
                    errors.email
                }}</span>
            </div>

            <div>
                <label for="password">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    v-model="form.password"
                    :class="{ 'input-error': errors.password }"
                    placeholder="Entrez votre mot de passe"
                />
                <span v-if="errors.password" class="error">{{
                    errors.password
                }}</span>
            </div>

            <button type="submit" :disabled="isSubmitting">S'inscrire</button>
        </form>

        <p v-if="isSuccess" class="success">Inscription réussie !</p>
        <p v-if="isError" class="error">
            Erreur lors de l'inscription. Essayez à nouveau.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
            },
            errors: {},
            isSubmitting: false,
            isSuccess: false,
            isError: false,
        };
    },
    methods: {
        // Validation simple du formulaire
        validateForm() {
            this.errors = {}; // Réinitialisation des erreurs
            let valid = true;

            if (!this.form.name) {
                this.errors.name = "Le nom est requis.";
                valid = false;
            }

            if (!this.form.email) {
                this.errors.email = "L'email est requis.";
            } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
                this.errors.email = "Email invalide.";
                valid = false;
            }

            if (!this.form.password) {
                this.errors.password = "Le mot de passe est requis.";
                valid = false;
            } else if (this.form.password.length < 6) {
                this.errors.password =
                    "Le mot de passe doit contenir au moins 6 caractères.";
                valid = false;
            }

            return valid;
        },

        // Gestion de la soumission du formulaire
        async handleSubmit() {
            if (this.validateForm()) {
                this.isSubmitting = true;
                this.isSuccess = false;
                this.isError = false;

                try {
                    // Simuler une requête d'inscription
                    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simule un délai de 2 secondes

                    // En cas de succès
                    this.isSuccess = true;
                    this.form.name = "";
                    this.form.email = "";
                    this.form.password = "";
                } catch (error) {
                    // En cas d'erreur
                    this.isError = true;
                } finally {
                    this.isSubmitting = false;
                }
            }
        },
    },
};
</script>

<style scoped>
.signup {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

h2 {
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
}

input {
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

button {
    margin: 20px 0;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:disabled {
    background-color: #ccc;
}

.input-error {
    border: 1px solid red;
}

.error {
    color: red;
    font-size: 14px;
}

.success {
    color: green;
    font-size: 14px;
    text-align: center;
}
</style>
