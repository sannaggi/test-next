export default (req, res) => {
    const { extra } = req.query
    res.status(200).json({
        quote: 'Write tests, not too many, mostly integration',
        author: 'Guillermo Rauch',
        extra
    })
}