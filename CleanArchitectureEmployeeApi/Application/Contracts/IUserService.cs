namespace Application.Contracts;

public interface IUserService
{
    Task<string> RegisterAsync(string email, string password, string role = "User");
    Task<string> LoginAsync(string email, string password);
}
