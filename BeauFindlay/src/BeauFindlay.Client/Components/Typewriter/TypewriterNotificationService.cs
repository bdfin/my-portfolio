namespace BeauFindlay.Client.Components.Typewriter;

public class TypewriterNotificationService : ITypewriterNotificationService
{
    public event EventHandler<TypingCompletedEventArgs>? TypingCompleted;

    public void NotifyTypingCompleted(TypingCompletedEventArgs args) => TypingCompleted?.Invoke(this, args);
}

public class TypingCompletedEventArgs(string typewriterInstanceId) : EventArgs
{
    public string TypewriterInstanceId { get; set; } = typewriterInstanceId;
}