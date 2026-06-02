const cache = new Map();

const DEFAULT_TTL = 1000 * 60 * 3;
// 3분 캐시

exports.getCache = (key) => {
    const item = cache.get(key);

    if (!item) {
        return null;
    }

    const now = Date.now();

    if (now > item.expireAt) {
        cache.delete(key);
        return null;
    }

    return item.data;
};

exports.setCache = (key, data, ttl = DEFAULT_TTL) => {
    cache.set(key, {
        data,
        expireAt: Date.now() + ttl
    });
};

exports.clearCache = () => {
    cache.clear();
};