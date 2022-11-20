import "../style/quote.css";

function Quote() {

    const quotes = ["The only person you are destined to become is the person you decide to be.",
        "Once you learn to quit, it becomes a habit.",
        "A year from now you may wish you had started today.",
        "Don’t give up on your dreams, or your dreams will give up on you.",
        "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.",
        "Most people fail, not because of lack of desire, but, because of lack of commitment.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Some people want it to happen, some wish it would happen, others make it happen.",
        "Look in the mirror. That’s your competition."];



    return (
        <div className="content-quote">
            <p className="quote">"{quotes[Math.floor(Math.random() * 9)]}"</p>
        </div>
    );
}

export default Quote;
