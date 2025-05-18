using Application.Contracts;

using Domain.Entities;
using Infrastructure.Data.DataContext;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Repositories;

public class EmployeeRepository : IEmployeeRepository
{
    private readonly ApplicationDbContext _context;

    public EmployeeRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Employee>> GetAllAsync()
        => await _context.Employees.Include(e => e.User).ToListAsync();

    public async Task<Employee?> GetByIdAsync(int id)
        => await _context.Employees.Include(e => e.User).FirstOrDefaultAsync(e => e.Id == id);

    public async Task<Employee> AddAsync(Employee employee)
    {
        _context.Employees.Add(employee);
        await _context.SaveChangesAsync();
        return employee;
    }

    public async Task<Employee> UpdateAsync(Employee employee)
    {
        _context.Employees.Update(employee);
        await _context.SaveChangesAsync();
        return employee;
    }

    public async Task DeleteAsync(int id)
    {
        var emp = await _context.Employees.FindAsync(id);
        if (emp is not null)
        {
            _context.Employees.Remove(emp);
            await _context.SaveChangesAsync();
        }
    }
}
