import { collection, doc, setDoc, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import db from './db';

const booksAndMoviesRepo = () => {

    const _addToRepo = async (repoItem, userName, collectionName) => {
        const repoRef = collection(db, "users", userName, collectionName);
        setDoc(doc(repoRef), {
            ...repoItem,
            createdAt: new Date(),
        }
        );
    }

    const _removeFromRepo = async (repoItem, userName, collectionName) => {
        // console.log(`repoItem- ${JSON.stringify(repoItem)}`);
        const itemQuery = query(collection(db, "users", userName, collectionName),
            where("id", "==", `${repoItem.id}`));
        const querySnapshot = await getDocs(itemQuery);
        if (!querySnapshot.empty) {
            const foundDoc = querySnapshot.docs[0];
            // console.log(`found item to delete - ${JSON.stringify(foundDoc.data())}`)
            await deleteDoc(foundDoc.ref);
        }
    }

    const _getUserItemsFromRepo = async (userName, collectionName) => {
        const userItemColl = collection(db, "users", userName, collectionName);
        const userItemDocs = await getDocs(userItemColl);
        const userItemList = userItemDocs?.docs.map(doc => doc.data());
        //console.log(`userItemList:${JSON.stringify(userItemList)}`)
        return userItemList;
    }

    return {
        async addRepoItem(item, userName, collectionName) {
            await _addToRepo(item, userName, collectionName);
        },
        async removeRepoItem(item, userName, collectionName) {
            await _removeFromRepo(item, userName, collectionName);
        },
        async getRepoItemsForUser(userName, collectionName) {
            return await _getUserItemsFromRepo(userName, collectionName);
        },
    };
}

export default booksAndMoviesRepo;