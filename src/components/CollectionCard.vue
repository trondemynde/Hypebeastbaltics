<template>
    <router-link :to="collection.link" class="collection-card transform hover:scale-105 transition duration-300 ease-in-out">
        <img :src="collection.image" :alt="collection.name" />
        <div class="collection-info">
            <p>{{ collection.name }}</p>
        <p>→</p>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        collection: {
            type: Object,
            required: true,
            default: () => ({
                name: 'Collection Name',
                image: 'default-image-url.jpg',
                link: '/collections/default'
            })
        }
    }
};
</script>

<style scoped>
.collection-card {
    display: inline-block;
    text-align: center;
    margin: 0 1rem;
}

.collection-card img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 0.5rem;
}

.collection-info {
    display: flex;
    justify-content: left;
    align-items: left;
}

.collection-info p {
    font-size: 1rem;
    margin-right: 0.5rem;
}

.collection-info a {
    color: #000000;
    text-decoration: none;
}
</style>